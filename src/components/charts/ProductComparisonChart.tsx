import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ProductComparisonData {
  phoenix: number;
  apollo: number;
  voyager: number;
}

interface ProductComparisonChartProps {
  data: ProductComparisonData;
  width?: number;
  height?: number;
}

const ProductComparisonChart: React.FC<ProductComparisonChartProps> = ({
  data,
  width = 400,
  height = 250
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Prepare data
    const chartData = [
      { product: 'Phoenix', value: data.phoenix, color: '#ef4444' },
      { product: 'Apollo', value: data.apollo, color: '#3b82f6' },
      { product: 'Voyager', value: data.voyager, color: '#8b5cf6' }
    ];

    // Scales
    const xScale = d3.scaleBand()
      .domain(chartData.map(d => d.product))
      .range([0, innerWidth])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(chartData, d => d.value) || 0])
      .range([innerHeight, 0]);

    // Axes
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .style("font-size", "12px")
      .style("color", "#6b7280");

    g.append("g")
      .call(d3.axisLeft(yScale).ticks(5))
      .style("font-size", "12px")
      .style("color", "#6b7280");

    // Bars
    const bars = g.selectAll(".bar")
      .data(chartData)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.product)!)
      .attr("width", xScale.bandwidth())
      .attr("y", innerHeight)
      .attr("height", 0)
      .attr("fill", d => d.color)
      .attr("rx", 4)
      .style("opacity", 0.8)
      .on("mouseover", function(event, d) {
        d3.select(this).style("opacity", 1);
        
        // Tooltip
        const tooltip = g.append("g")
          .attr("id", "tooltip")
          .attr("transform", `translate(${xScale(d.product)! + xScale.bandwidth() / 2}, ${yScale(d.value) - 10})`);
        
        const rect = tooltip.append("rect")
          .attr("x", -25)
          .attr("y", -25)
          .attr("width", 50)
          .attr("height", 20)
          .attr("fill", "rgba(0,0,0,0.8)")
          .attr("rx", 4);
        
        tooltip.append("text")
          .attr("text-anchor", "middle")
          .attr("y", -10)
          .attr("fill", "white")
          .style("font-size", "12px")
          .text(d.value);
      })
      .on("mouseout", function() {
        d3.select(this).style("opacity", 0.8);
        g.select("#tooltip").remove();
      });

    // Animate bars
    bars.transition()
      .duration(750)
      .attr("y", d => yScale(d.value))
      .attr("height", d => innerHeight - yScale(d.value));

    // Value labels on bars
    g.selectAll(".label")
      .data(chartData)
      .enter().append("text")
      .attr("class", "label")
      .attr("x", d => xScale(d.product)! + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.value) - 5)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-weight", "600")
      .style("fill", "#374151")
      .style("opacity", 0)
      .text(d => d.value)
      .transition()
      .delay(750)
      .duration(300)
      .style("opacity", 1);

  }, [data, width, height]);

  return (
    <div className="bg-white rounded-lg p-4">
      <svg ref={svgRef} className="w-full h-auto"></svg>
    </div>
  );
};

export default ProductComparisonChart;