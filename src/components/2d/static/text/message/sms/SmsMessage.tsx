import "./SmsMessage.css";
import SmsReceivedTailSVG from "./svg/SmsReceivedTailSVG";
import SmsSentTailSVG from "./svg/SmsSentTailSVG";

type SmsMessageProps = {
  text?: string;
  mode: string;
};

export function SmsMessage({
  text = "hello world!",
  mode = "sending",
}: SmsMessageProps) {
  return (
    <div className="sms">
        <div className={`sms-content ${
            mode == "sending" ? 'sms-sent' : 'sms-received'
        }`}>
            {text}
        </div>

        {
            mode == "sending" ? <SmsSentTailSVG /> : <SmsReceivedTailSVG />
        }
    </div>
  );
}