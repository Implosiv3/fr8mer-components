import { useLayoutEffect, useRef } from "react";
import "./QuizzAnswer.css"
import "./QuizzAnswerOption.css";
import fitty, { type FittyInstance } from "fitty";

interface QuizAnswerProps {
  option: string;
  text: string;
  state?: "correct" | "wrong";
}

export function QuizzAnswerOption({
  option,
  text,
  state,
}: QuizAnswerProps) {
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
      <div className="badge-wrap">
        <div className="badge">
          {option}
        </div>
      </div>

      <div className="answer-option-btn">
        <div className="answer-content">
          <span ref={textRef} className="answer-text">
          {text}
        </span>
        </div>
      </div>
    </div>
  );
}