import WhatsAppCheckSVG from "./svg/WhatsAppCheckSVG";
import WhatsAppReceivedMessageTailSVG from "./svg/WhatsAppReceivedMessageTailSVG";
import WhatsAppSentMessageTailSVG from "./svg/WhatsAppSentMessageTailSVG";
import "./WhatsAppMessage.css";

type WhatsAppMessageProps = {
  text?: string;
  time?: string;
  mode: string;
  isDoubleChecked?: boolean;
  isBlueTick?: boolean;
};

export function WhatsAppMessage({
  text = "hello world!",
  time = "9:41",
  mode = "sending",
  isDoubleChecked = false,
  isBlueTick = false
}: WhatsAppMessageProps) {
  return (
    <div className={`whatsapp ${
        mode == 'sending' ? 'whatsapp-sent' : 'whatsapp-received'
    }`}>
        {mode == 'sending' ? <WhatsAppSentMessageTailSVG /> : <WhatsAppReceivedMessageTailSVG />}

        <div className={`whatsapp-text ${
            mode == 'sending' ? 'whatsapp-text-sent' : 'whatsapp-text-received'
        }`}>
            {text}
        </div>

        <div className={`whatsapp-meta ${
            mode == 'sending' ? 'whatsapp-meta-sent' : 'whatsapp-meta-received'
        }`}>
            <span>{time}</span>

            {mode == 'sending' && (
                <WhatsAppCheckSVG isDoubleChecked={isDoubleChecked} isBlueTick={isBlueTick} />
            )}
      </div>
    </div>
  );
}