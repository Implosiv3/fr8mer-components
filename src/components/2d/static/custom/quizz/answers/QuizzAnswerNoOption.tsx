import { useLayoutEffect, useRef } from "react";
import "./QuizzAnswer.css"
import "./QuizzAnswerNoOption.css";
import type { FittyInstance } from "fitty";
import fitty from "fitty";


interface QuizzAnswerNoOptionProps {
  text: string;
  state?: "correct" | "wrong";
}

export function QuizzAnswerNoOption({
  text,
  state,
}: QuizzAnswerNoOptionProps) {
  const textRef = useRef<HTMLDivElement>(null);
    const fittyRef = useRef<FittyInstance | null>(null);
  
     useLayoutEffect(() => {
      if (!textRef.current) return;
  
      fittyRef.current?.unsubscribe();
  
      fittyRef.current = fitty(textRef.current, {
        minSize: 8,
        maxSize: 21,
        multiLine: false,
      });
  
      return () => {
        fittyRef.current?.unsubscribe();
      };
    }, []);
  
    useLayoutEffect(() => {
      fitty.fitAll();
    }, [text]);
  
    useLayoutEffect(() => {
      fittyRef.current?.fit();
    }, [text]);

  return (
    <div
      className={`answer-row ${
        state ?? ""
      }`}
    >
      <div className="answer-no-option-btn">
        <div className="answer-content">
          <span ref={textRef} className="answer-text">
          {text}
        </span>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="quiz-answer">
      <div className="quiz-answer-text">
        {text}
      </div>
    </div>
  );
}