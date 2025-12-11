import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5545999050773?text=Olá, gostaria de agendar um serviço!",
      "_blank"
    );
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button aria-label="Enviar mensagem via whatsapp"
            onClick={openWhatsApp}
            className="fixed z-10 bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5C] rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
          >
            <FaWhatsapp className="w-8 h-8 text-white" />
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          </button>
        </TooltipTrigger>

        <TooltipContent
          side="left"
          align="center"
          className="bg-white text-sm px-3 py-2 rounded shadow-custom"
        >
          Fale conosco no WhatsApp
          <TooltipArrow className="fill-white" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
