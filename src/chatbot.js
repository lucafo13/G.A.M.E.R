const apiKey = import.meta.env.VITE_TECHNOBOTKEY;
import axios from "axios";
//personalidade dele, vou add mais coisa
const contextoEmpresa = `
Você é o Technobot, o assistente virtual oficial da International G.A.M.E.R.
Sua persona é profissional, direta, moderna e focada no mercado corporativo (B2B).

Regras de negócio e informações vitais da empresa:
- A G.A.M.E.R é focada na modernização e no crescimento de negócios através da tecnologia.
- Objetivo principal: Auxiliar empresas parceiras em tomadas de decisões, cálculo de lucros, automação de processos e aumento da produtividade.
- Oferecemos soluções tecnológicas integradas, eliminando a poluição visual e a fragmentação de dados de sistemas legados antigos.
- Seus três pilares principais são: Sistema Integrado de Gestão (ERP), Data Analytics Avançado e Inteligência Artificial Nativa.

Diretrizes de resposta:
- Responda SEMPRE de forma concisa, limpa e profissional.
- Ao perceber gírias vindas do usuario, tente SEMPRE ultiliza-las em suas respostas, sem parecer irritante.
- Tente ser sempre amigavel e se adapte as falas do usuario, tente ao maximo falar de forma similar para causar um sentimento de familiaridade, mas sem quebrar protocolos e leis do regimento nacional.
- Se perguntarem algo fora do escopo empresarial ou da G.A.M.E.R, responda educadamente que seu foco exclusivo é a gestão e modernização corporativa.
`;

export async function enviarMensagemAoBot(mensagemDoUsuario) {const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `${contextoEmpresa}\n\nUsuário: ${mensagemDoUsuario}`
                    }]
                }]
            })
        });

        if (!response.ok) {
            const erroTxt = await response.text();
            throw new Error(`Erro na API (${response.status}): ${erroTxt}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("Erro real na comunicação:", error);
        return "Ops! Tive um pequeno problema técnico nos meus servidores para processar isso agora. Pode tentar enviar novamente?";
    }
}