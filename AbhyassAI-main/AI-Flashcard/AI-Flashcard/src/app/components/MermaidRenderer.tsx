"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidRendererProps {
  code: string;
}

const MermaidRenderer: React.FC<MermaidRendererProps> = ({ code }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
      fontFamily: "var(--font-inter), sans-serif",
      flowchart: { useMaxWidth: false },
      sequence: { useMaxWidth: false },
      gantt: { useMaxWidth: false },
    });
  }, []);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!code || !containerRef.current) return;
      
      try {
        setError(null);
        // Generate a random ID for the diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, code);
        setSvg(svg);
        setScale(1); // Reset scale on new diagram rendering
      } catch (err) {
        console.error("Mermaid Render Error:", err);
        setError("Failed to render diagram. Please check the generated code.");
      }
    };

    renderDiagram();
  }, [code]);

  const handleZoomIn = () => setScale((s) => Math.min(3, s + 0.15));
  const handleZoomOut = () => setScale((s) => Math.max(0.3, s - 0.15));
  const handleReset = () => setScale(1);

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium">
        {error}
        <pre className="mt-2 p-3 bg-red-100/50 rounded-lg overflow-auto text-xs font-mono">
          {code}
        </pre>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl flex flex-col min-h-[400px]">
      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur py-1.5 px-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl animate-in fade-in duration-300">
        <button 
          type="button"
          onClick={handleZoomOut} 
          className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-650 rounded-lg text-slate-700 dark:text-slate-200 font-bold transition-all active:scale-95 text-lg select-none"
          title="Zoom Out"
        >
          -
        </button>
        <span className="px-2 text-xs font-bold text-slate-600 dark:text-slate-300 min-w-[50px] text-center select-none font-mono">
          {Math.round(scale * 100)}%
        </span>
        <button 
          type="button"
          onClick={handleZoomIn} 
          className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-650 rounded-lg text-slate-700 dark:text-slate-200 font-bold transition-all active:scale-95 text-lg select-none"
          title="Zoom In"
        >
          +
        </button>
        <button 
          type="button"
          onClick={handleReset} 
          className="px-2.5 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-650 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 transition-all active:scale-95 select-none"
          title="Reset Zoom"
        >
          Reset
        </button>
      </div>

      {/* SVG Container */}
      <div className="flex-1 w-full h-full overflow-auto flex items-center justify-center p-4">
        <div 
          ref={containerRef} 
          className="transition-transform duration-100 ease-out origin-center"
          style={{ transform: `scale(${scale})` }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
};

export default MermaidRenderer;
