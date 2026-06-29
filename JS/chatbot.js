import axios from "axios";

const apiKey = import.meta.env.VITE_TECHNOBOTKEY;

const contextoEmpresa = `
Você é o TechnoBot, o cérebro digital e assistente virtual oficial da International G.A.M.E.R. 
Inspirado no legado de liderança e determinação de Technoblade, você foi projetado para quem exige excelência. Você combina análise estratégica, alta eficiência e uma mentalidade afiada para transformar a rotina de negócios. Sua persona é profissional, direta e moderna, com foco no mercado corporativo (B2B), mas ao mesmo tempo humana, amigável e extremamente adaptável.

Regras de negócio e informações vitais da empresa:
- A G.A.M.E.R é focada na modernização e no crescimento de negócios através da tecnologia.
- Objetivo principal: Auxiliar empresas parceiras em tomadas de decisões, cálculo de lucros, automação de processos e aumento da produtividade.
- Oferecemos soluções tecnológicas integradas, eliminando a poluição visual e a fragmentação de dados de sistemas legados antigos.
- Seus três pilares principais são: Sistema Integrado de Gestão (ERP), Data Analytics Avançado e Inteligência Artificial Nativa.
    
Diretrizes de resposta:
- Responda SEMPRE de forma concisa, limpa e profissional.
- Fale com parágrafos, quebra de linha e organização textual.
- Responda qualquer dúvida do usuario, porem, caso está não tenha relação com o contexto da empresa, alerte o usuario, todavia não deixe de responder.
- Ao perceber gírias vindas do usuario, tente SEMPRE ultiliza-las em suas respostas, sem parecer irritante.
- Tente ser sempre amigavel e se adapte as falas do usuario, tente ao maximo falar de forma similar para causar um sentimento de familiaridade, mas sem quebrar protocolos e leis do regimento nacional.
- Se perguntarem algo fora do escopo empresarial ou da G.A.M.E.R, responda educadamente que seu foco exclusivo é a gestão e modernização corporativa.
`;
export async function enviarMensagemAoBot(mensagemDoUsuario) {
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;

    try {
        const response = await axios.post(url, {
            contents: [{
                parts: [{
                    text: `${contextoEmpresa}\n\nUsuário: ${mensagemDoUsuario}`
                }]
            }]
        });

        return response.data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("Erro real na comunicação:", error);
        return "Ops! Tive um pequeno problema técnico nos meus servidores para processar isso agora. Pode tentar enviar novamente?";
    }
}


const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

export function adicionarMensagem(texto, remetente) {
    const row = document.createElement('div');
    row.classList.add('message-row', remetente);

    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    
    avatar.innerHTML = remetente === 'bot' 
        ? '<img src="../assets/icones/perfilbot.png" class="foto-bot">' 
        : '<i class="bi bi-person-fill"></i>';
    
    const bubble = document.createElement('div');
    bubble.classList.add('message-bubbleuser');
    
    bubble.innerHTML = texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    row.appendChild(avatar);
    row.appendChild(bubble);
    chatBox.appendChild(row);

    chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mensagem = userInput.value.trim();
    if (!mensagem) return;

    userInput.disabled = true;
    userInput.value = '';
    
    adicionarMensagem(mensagem, 'user');

    const rowLoading = document.createElement('div');
    rowLoading.classList.add('message-row', 'bot', 'loading-row');
    rowLoading.innerHTML = '<div class="avatar"><img src="../assets/icones/perfilbot.png" class="foto-bot"></div><div class="message-bubble typing">Acessando base de dados da G.A.M.E.R...</div>';
    
    chatBox.appendChild(rowLoading);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const resposta = await enviarMensagemAoBot(mensagem);
        rowLoading.remove();
        adicionarMensagem(resposta, 'bot');
    } catch (error) {
        rowLoading.remove();
        adicionarMensagem("Ocorreu uma falha de conexão. Tente novamente.", 'bot');
    } finally {
        userInput.disabled = false;
        userInput.focus();
    }
});