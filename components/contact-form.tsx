"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Envio real para a API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "contato@mellocosta.com.br",
          replyTo: formData.email,
        }),
      })

      if (!response.ok) throw new Error("Falha ao enviar mensagem")

      setIsSubmitted(true)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Mensagem Enviada!</h3>
        <p className="text-gray-600 mb-6">
          Agradecemos seu contato. Um de nossos especialistas entrará em contato com você em breve.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-primary-gold hover:bg-primary-gold/90 text-white">
          Enviar Nova Mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Área de Interesse *
          </label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma área" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="familia">Direito da Família e Sucessões</SelectItem>
              <SelectItem value="imobiliario">Direito Imobiliário</SelectItem>
              <SelectItem value="tributario">Direito Tributário</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem *
        </label>
        <Textarea
          id="message"
          placeholder="Descreva seu caso ou dúvida..."
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2" required />
          <span className="text-sm text-gray-600">
            Concordo com a{" "}
            <a href="/politica-de-privacidade" className="text-primary-gold hover:underline">
              Política de Privacidade
            </a>{" "}
            e autorizo o tratamento dos meus dados pessoais.
          </span>
        </label>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary-gold hover:bg-primary-gold/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}

export default ContactForm
