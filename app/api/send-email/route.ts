import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Aqui você implementaria a lógica real de envio de e-mail
    // Exemplo usando um serviço de e-mail como Nodemailer, SendGrid, etc.

    // Simulando o envio bem-sucedido
    console.log("E-mail enviado para contato@mellocosta.com.br")
    console.log("De:", email)
    console.log("Nome:", name)
    console.log("Telefone:", phone)
    console.log("Assunto:", subject)
    console.log("Mensagem:", message)

    return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" })
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar e-mail" }, { status: 500 })
  }
}
