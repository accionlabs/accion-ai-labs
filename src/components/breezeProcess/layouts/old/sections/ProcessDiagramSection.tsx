import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { formatBulletText } from '../../../utils/textFormatting';

interface ProcessDiagramConfig {
  phaseNumber: 1 | 2 | 3;
  teamPositions: {
    DE: number;
    HIL: number;
    SE: number;
    AD: number;
  };
  phases: {
    [key: number]: {
      title: string;
      description: string;
      sections: Array<{
        id: string;
        title: string;
        activities: Array<{
          sequence: number;
          type: 'flow' | 'self';
          from?: string;
          to?: string;
          label?: string;
          bidirectional?: boolean;
          team?: string;
          activities?: string[];
        }>;
      }>;
      manualOutput: {
        percentage: string;
        deliverables: string;
      };
      automatedOutput: {
        percentage: string;
        deliverables: string;
      };
    };
  };
}

interface ProcessDiagramSectionProps {
  content: ProcessDiagramConfig;
}

const ProcessDiagramSection: React.FC<ProcessDiagramSectionProps> = ({ content }) => {
  const { phaseNumber, teamPositions, phases } = content;
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const ArrowFlow = ({ from, to, label, bidirectional = false }: { from: string, to: string, label: string, bidirectional?: boolean }) => {
    const getTeamPosition = (team: string) => {
      return { 
        x: (teamPositions as any)[team] || 50, 
        color: team === 'AD' ? 'text-blue-600' : 
               team === 'SE' ? 'text-purple-600' : 
               team === 'HIL' ? 'text-green-600' : 
               team === 'DE' ? 'text-orange-600' : 'text-gray-600'
      };
    };

    const fromPos = getTeamPosition(from);
    const toPos = getTeamPosition(to);
    
    return (
      <div className="relative h-16 mb-2">
        <svg className="absolute inset-0 w-full h-full">
          <line 
            x1={`${fromPos.x}%`} 
            y1="8" 
            x2={`${toPos.x}%`} 
            y2="8" 
            stroke="#6b7280" 
            strokeWidth="1.6"
            markerEnd="url(#arrowhead)"
          />
          {bidirectional && (
            <line 
              x1={`${toPos.x}%`} 
              y1="10" 
              x2={`${fromPos.x}%`} 
              y2="10" 
              stroke="#6b7280" 
              strokeWidth="1.6"
              markerEnd="url(#arrowhead)"
            />
          )}
          <defs>
            <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
        <div 
          className="absolute top-9 text-xs font-medium bg-white px-2 py-1 rounded border shadow-sm z-10"
          style={{ 
            left: `${Math.min(fromPos.x, toPos.x) + Math.abs(toPos.x - fromPos.x) / 2}%`,
            transform: 'translateY(-70%) translateX(-50%)'
          }}
        >
          {label}
        </div>
      </div>
    );
  };

  const SelfDirectedActivity = ({ team, activities, index = 0 }: { team: string, activities: string[], index?: number }) => {
    const getTeamInfo = (team: string) => {
      return { 
        position: (teamPositions as any)[team] || 50, 
        color: team === 'AD' ? 'bg-white/90 border-blue-300' : 
               team === 'SE' ? 'bg-white/90 border-purple-300' : 
               team === 'HIL' ? 'bg-white/90 border-green-300' : 
               team === 'DE' ? 'bg-white/90 border-orange-300' : 'bg-white/90 border-gray-300',
        textColor: team === 'AD' ? 'text-blue-700' : 
                  team === 'SE' ? 'text-purple-700' : 
                  team === 'HIL' ? 'text-green-700' : 
                  team === 'DE' ? 'text-orange-700' : 'text-gray-700'
      };
    };

    const teamInfo = getTeamInfo(team);
    const topOffset = index * 50;
    
    return (
      <div 
        className={`absolute p-3 rounded-lg border ${teamInfo.color} shadow-sm z-20`}
        style={{ 
          left: `${teamInfo.position}%`,
          transform: 'translateX(-50%)',
          top: `${topOffset}px`,
          width: '21%'
        }}
      >
        <ul className="space-y-1">
          {activities.map((activity: string, idx: number) => (
            <li key={idx} className={`text-xs ${teamInfo.textColor} flex items-start gap-1`}>
              <span className="w-1 h-1 bg-current rounded-full mt-1.5 flex-shrink-0"></span>
              <span dangerouslySetInnerHTML={{ __html: formatBulletText(activity) }} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const phaseData = phases[phaseNumber];

  return (
    <div className="process-diagram-container">
        {/* Phase Header */}
        <div className="relative text-center mb-6 z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="text-2xl font-bold text-gray-800">Phase {phaseNumber}: {phaseData.title}</h2>
          {phaseData.description && (
            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="print:hidden text-gray-600 hover:text-gray-800 transition-colors"
            >
              {isDescriptionExpanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        {phaseData.description && isDescriptionExpanded && (
          <div className="max-w-5xl mx-auto text-sm text-gray-600 leading-relaxed text-left">
            <ul className="space-y-2">
              {phaseData.description.split('. ').filter((sentence: string) => sentence.trim()).map((sentence: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span dangerouslySetInnerHTML={{ __html: formatBulletText(`${sentence.trim()}${sentence.endsWith('.') ? '' : '.'}`) }} />
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>

      {/* Process Container with Column Backgrounds */}
      <div className="relative">
        {/* Process Group Backgrounds */}
        <div className="absolute inset-0 grid grid-cols-4 gap-2 pointer-events-none z-0">
          <div className="bg-orange-200 rounded-lg opacity-30"></div>
          <div className="bg-green-200 rounded-lg opacity-30"></div>
          <div className="bg-purple-200 rounded-lg opacity-30"></div>
          <div className="bg-blue-200 rounded-lg opacity-30"></div>
        </div>

        {/* Process Group Headers */}
        <div className="relative mb-6 z-10">
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center">
              <h3 className="font-bold text-orange-800 text-lg">Manual Process</h3>
            </div>
            <div className="col-span-3 bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center">
              <h3 className="font-bold text-blue-800 text-lg">Semantic Engineering Process</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gradient-to-b from-orange-50 to-orange-100 border-2 border-orange-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-orange-900 text-base mb-1">Development Engineers</h3>
              <div className="bg-orange-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-orange-800">DE</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-green-50 to-green-100 border-2 border-green-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-green-900 text-base mb-1">Human In Loop</h3>
              <div className="bg-green-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-green-800">HIL</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 border-2 border-purple-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-purple-900 text-base mb-1">Semantic Engineers</h3>
              <div className="bg-purple-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-purple-800">SE</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-blue-900 text-base mb-1">Agent Developers</h3>
              <div className="bg-blue-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-blue-800">AD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="relative space-y-4 z-10">
          {phaseData.sections.map((section: any) => (
            <div key={section.id} className="border rounded-lg bg-white/80 backdrop-blur-sm">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 text-center flex items-center justify-between hover:bg-opacity-80 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-center">{section.title}</h4>
                </div>
                <div className="print:hidden">
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-4 pb-4">
                  {section.activities && (
                    <div className="space-y-4 mb-4">
                      {(() => {
                        const sequenceGroups: Record<number, any[]> = {};
                        section.activities.forEach((activity: any) => {
                          const seq = activity.sequence || 0;
                          if (!sequenceGroups[seq]) sequenceGroups[seq] = [];
                          sequenceGroups[seq].push(activity);
                        });
                        
                        return Object.keys(sequenceGroups)
                          .sort((a, b) => parseInt(a) - parseInt(b))
                          .map((seqKey) => {
                            const sequence = parseInt(seqKey);
                            const activities = sequenceGroups[sequence];
                            
                            return (
                              <div key={sequence} className="relative">
                                <div className="relative min-h-16">
                                  {activities.map((activity: any, idx: number) => {
                                    if (activity.type === 'flow') {
                                      return (
                                        <ArrowFlow 
                                          key={`${sequence}-${idx}`} 
                                          from={activity.from} 
                                          to={activity.to} 
                                          label={activity.label}
                                          bidirectional={activity.bidirectional}
                                        />
                                      );
                                    } else if (activity.type === 'self') {
                                      return (
                                        <SelfDirectedActivity 
                                          key={`${sequence}-${idx}`}
                                          team={activity.team}
                                          activities={activity.activities}
                                          index={0}
                                        />
                                      );
                                    }
                                    return null;
                                  })}
                                </div>
                              </div>
                            );
                          });
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Phase Outputs */}
        <div className="relative mt-6 grid grid-cols-4 gap-2 z-10">
          <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 text-center">
            <h4 className="font-bold text-orange-800 mb-2">Manual Process Output</h4>
            <div className="bg-orange-200 rounded px-2 py-1 mb-2 inline-block">
              <span className="text-xs font-bold text-orange-800">
                {phaseData.manualOutput.percentage} of scope
              </span>
            </div>
            <p className="text-orange-700 text-sm">{phaseData.manualOutput.deliverables}</p>
          </div>
          
          <div className="col-span-3 bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
            <h4 className="font-bold text-blue-800 mb-2">Semantic Engineering Output</h4>
            <div className="bg-blue-200 rounded px-2 py-1 mb-2 inline-block">
              <span className="text-xs font-bold text-blue-800">
                {phaseData.automatedOutput.percentage} of scope
              </span>
            </div>
            <p className="text-blue-700 text-sm">{phaseData.automatedOutput.deliverables}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDiagramSection;