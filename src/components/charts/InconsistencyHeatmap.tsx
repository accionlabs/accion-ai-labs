import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useOntology } from '../../contexts/OntologyContext';

interface InconsistencyHeatmapProps {
  width?: number;
  height?: number;
}

const InconsistencyHeatmap: React.FC<InconsistencyHeatmapProps> = ({
  width = 400,
  height = 300
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { state } = useOntology();

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 60, right: 30, bottom: 60, left: 80 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Prepare data matrix
    const products = ['phoenix', 'apollo', 'voyager'];
    const ontologies = ['functional', 'design', 'architecture', 'code'];
    
    const heatmapData: Array<{
      product: string;
      ontology: string;
      inconsistencies: number;
      total: number;
      rate: number;
    }> = [];

    products.forEach(product => {
      ontologies.forEach(ontology => {
        const nodes = state.nodes.filter(n => 
          n.product === product && n.type === ontology
        );
        const inconsistentNodes = nodes.filter(n => 
          n.inconsistencies && n.inconsistencies.length > 0
        );
        const total = nodes.length;
        const inconsistencies = inconsistentNodes.length;
        const rate = total > 0 ? inconsistencies / total : 0;
        
        heatmapData.push({
          product,
          ontology,
          inconsistencies,
          total,
          rate
        });
      });
    });

    // Scales
    const xScale = d3.scaleBand()
      .domain(products)
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleBand()
      .domain(ontologies)
      .range([0, innerHeight])
      .padding(0.1);

    const colorScale = d3.scaleSequential()
      .interpolator(d3.interpolateReds)
      .domain([0, d3.max(heatmapData, d => d.rate) || 1]);

    // Create cells
    const cells = g.selectAll(".cell")
      .data(heatmapData)
      .enter().append("rect")
      .attr("class", "cell")
      .attr("x", d => xScale(d.product)!)
      .attr("y", d => yScale(d.ontology)!)
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .attr("fill", d => d.rate > 0 ? colorScale(d.rate) : "#f3f4f6")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 4)
      .style("opacity", 0);

    // Animate cells
    cells.transition()
      .delay((d, i) => i * 50)
      .duration(500)
      .style("opacity", 1);

    // Add text labels
    const labels = g.selectAll(".label")
      .data(heatmapData)
      .enter().append("text")
      .attr("class", "label")
      .attr("x", d => xScale(d.product)! + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.ontology)! + yScale.bandwidth() / 2)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("font-size", "11px")
      .style("font-weight", "600")
      .style("fill", d => d.rate > 0.5 ? "#ffffff" : "#374151")
      .style("opacity", 0)
      .text(d => d.inconsistencies > 0 ? d.inconsistencies : "");

    // Animate labels
    labels.transition()
      .delay(500)
      .duration(300)
      .style("opacity", 1);

    // X axis labels
    g.append("g")
      .attr("transform", `translate(0,${innerHeight + 10})`)
      .selectAll(".x-label")
      .data(products)
      .enter().append("text")
      .attr("class", "x-label")
      .attr("x", d => xScale(d)! + xScale.bandwidth() / 2)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-weight", "500")
      .style("fill", "#374151")
      .text(d => d.charAt(0).toUpperCase() + d.slice(1));

    // Y axis labels
    g.append("g")
      .attr("transform", "translate(-10,0)")
      .selectAll(".y-label")
      .data(ontologies)
      .enter().append("text")
      .attr("class", "y-label")
      .attr("x", 0)
      .attr("y", d => yScale(d)! + yScale.bandwidth() / 2)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .style("font-size", "12px")
      .style("font-weight", "500")
      .style("fill", "#374151")
      .text(d => d.charAt(0).toUpperCase() + d.slice(1));

    // Title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .style("fill", "#374151")
      .text("Inconsistencies by Product & Ontology");

    // Tooltip interactions
    cells
      .on("mouseover", function(event, d) {
        d3.select(this)
          .style("stroke", "#000000")
          .style("stroke-width", 2);
        
        // Create tooltip
        const tooltip = d3.select("body").append("div")
          .attr("class", "tooltip")
          .style("position", "absolute")
          .style("background", "rgba(0,0,0,0.8)")
          .style("color", "white")
          .style("padding", "8px 12px")
          .style("border-radius", "4px")
          .style("font-size", "12px")
          .style("pointer-events", "none")
          .style("opacity", 0);

        tooltip.transition()
          .duration(200)
          .style("opacity", 1);

        tooltip.html(`
          <strong>${d.product.charAt(0).toUpperCase() + d.product.slice(1)} - ${d.ontology.charAt(0).toUpperCase() + d.ontology.slice(1)}</strong><br/>
          Inconsistencies: ${d.inconsistencies}/${d.total}<br/>
          Rate: ${(d.rate * 100).toFixed(1)}%
        `)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", function() {
        d3.select(this)
          .style("stroke", "#ffffff")
          .style("stroke-width", 2);
        
        d3.selectAll(".tooltip").remove();
      });

  }, [state.nodes, width, height]);

  return (
    <div className="bg-white rounded-lg p-4">
      <svg ref={svgRef} className="w-full h-auto"></svg>
      <div className="flex items-center justify-center mt-4 space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span>No Issues</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-300 rounded"></div>
          <span>Some Issues</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-600 rounded"></div>
          <span>Many Issues</span>
        </div>
      </div>
    </div>
  );
};

export default InconsistencyHeatmap;