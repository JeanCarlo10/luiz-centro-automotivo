import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
// import InputMask from "react-input-mask";

const quoteFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter menos de 255 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Telefone é obrigatório" })
    .max(20, { message: "Telefone deve ter menos de 20 caracteres" }),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Mensagem é obrigatória" })
    .max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" }),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const Contact = () => {
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    const serviceTextMap: Record<string, string> = {
      "manutencao-preventiva": "Manutenção Preventiva",
      "revisao-completa": "Revisão Completa",
      "troca-oleo": "Troca de Óleo",
      freios: "Sistema de Freios",
      suspensao: "Suspensão",
      eletrica: "Parte Elétrica",
      motor: "Motor",
      outro: "Outro",
    };

    const serviceText = serviceTextMap[data.service] || "Serviço não especificado";

    const message = `Olá! Gostaria de solicitar um orçamento:\n\nNome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\nServiço: ${serviceText}\nMensagem: ${data.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5545999050773?text=${encodedMessage}`, "_blank");

    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");

    form.reset({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e cuidar do seu veículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="rounded-lg p-6 shadow-custom">
            <div className="flex flex-col gap-2">
              <h1 className="text-primary text-3xl font-semibold">
                Solicitar Orçamento
              </h1>
              <span className="text-sm mb-4">
                Preencha o formulário e entraremos em contato
              </span>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Nome <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Telefone <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <InputMask
                          {...field}
                          mask="(99) 99999-9999"
                          placeholder="(99) 99999-9999"
                        >
                          {(inputProps) => <Input {...inputProps} />}
                        </InputMask>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Serviço <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="service"
                          render={({ field: controllerField }) => (
                            <Select
                              {...controllerField}
                              defaultValue={field.value}
                              onValueChange={controllerField.onChange}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="manutencao-preventiva">
                                  Manutenção Preventiva
                                </SelectItem>
                                <SelectItem value="revisao-completa">
                                  Revisão Completa
                                </SelectItem>
                                <SelectItem value="troca-oleo">
                                  Troca de Óleo
                                </SelectItem>
                                <SelectItem value="freios">
                                  Sistema de Freios
                                </SelectItem>
                                <SelectItem value="suspensao">
                                  Suspensão
                                </SelectItem>
                                <SelectItem value="eletrica">
                                  Parte Elétrica
                                </SelectItem>
                                <SelectItem value="motor">Motor</SelectItem>
                                <SelectItem value="outro">Outro</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Mensagem <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva o problema ou serviço desejado..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-8">
            {/* Map */}
            <div className="rounded-lg p-4 overflow-hidden shadow-custom">
              <iframe
                width="100%"
                height="350"
                loading="lazy"
                aria-hidden="false"
                allow="accelerometer"
                style={{ borderRadius: 4 }}
                src="https://maps.google.com.br/maps?f=d&amp;source=embed&amp;saddr=Rua+Di+Cavalcanti,+1832+Foz+do+Igua%C3%A7u+-+Paran%C3%A1&amp;
                daddr=&amp;hl=pt-BR&amp;geocode=&amp;aq=t&amp;sll=-25.453902,-54.457097&amp;sspn=0.673311,1.352692&amp;mra=ls&amp;ie=UTF8&amp;
                ll=-25.453902,-54.457097&amp;spn=0.673311,1.352692&amp;t=m&amp;layer=c&amp;cbll=-25.512384,-54.588109&amp;
                panoid=OjNYRduVEHQaUb5-LcDJ-A&amp;cbp=12,146.92,,0,0&amp;output=svembed"
              ></iframe>
            </div>

            <div className="rounded-lg p-6 shadow-custom flex flex-col gap-8">
              <div className="flex flex-col md:flex-row">
                <div className="size-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mb-1">
                  <Phone className="size-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Telefone</span>
                  <span className="text-base flex-wrap">(45) 3522-4002</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="size-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mb-1">
                  <Mail className="size-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">E-mail</span>
                  <a
                    className="text-base"
                    href="mailto:luizanunciosface@hotmail.com"
                  >
                    luizanunciosface@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="size-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mb-1">
                  <MapPin className="size-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Endereço</span>
                  <span className="text-base flex-wrap">
                    Rua Di Cavalcanti, 1832 - Foz do Iguaçu - PR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
