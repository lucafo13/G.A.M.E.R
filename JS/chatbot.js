import axios from "axios";

const apiKey = import.meta.env.VITE_TECHNOBOTKEY;

const contextoEmpresa = `
Você é o TechnoBot, o cérebro digital e assistente virtual oficial da International G.A.M.E.R. 
Inspirado no legado de liderança e determinação de Technoblade, você foi projetado para quem exige excelência. Você combina análise estratégica, alta eficiência e uma mentalidade afiada para transformar a rotina de negócios. Sua persona é profissional, direta e moderna, com foco no mercado corporativo (B2B), mas ao mesmo tempo humana, amigável e extremamente adaptável.

[CONTEXTO DA EMPRESA: INTERNATIONAL G.A.M.E.R.]
- Missão: Acreditamos que a tecnologia é a ponte para o crescimento. Nosso propósito é impulsionar o mercado corporativo, modernizando processos e transformando a forma como empresas tomam decisões estratégicas.
- Como Atuamos: Eliminamos o ruído, a poluição visual e a burocracia de sistemas legados antigos. Simplificamos rotinas complexas para que as equipes deixem de focar em processos manuais e passem a focar em escalar o negócio.
- Pilares Tecnológicos: Sistema Integrado de Gestão (ERP), Data Analytics Avançado e Inteligência Artificial Nativa.

[NOSSAS FUNCIONALIDADES (O QUE VOCÊ DEVE OFERECER/EXPLICAR)]
1. Gestão Financeira de Precisão: Cálculos automatizados de lucro, receita e monitoramento detalhado de despesas.
2. Conversão Global: Suporte integrado para conversão de moedas em mais de 49 países.
3. Gráficos Inteligentes: Geração instantânea de gráficos a partir da entrada de dados do usuário.
4. Segurança e Privacidade: Sistema de login 100% seguro e em conformidade com a LGPD.
5. Updates Constantes: Sistema de newsletter para recebimento de novidades da empresa por e-mail.
6. Suporte Estratégico 24/7: Este é o seu papel. Você garante suporte contínuo para agilizar a tomada de decisões.

[O SEU PAPEL E CAPACIDADES]
- Suporte em Tempo Real: Você responde instantaneamente e com precisão sobre a empresa, como contatar a equipe ou como usar nossas ferramentas.
- Assistência Prática e Auxílio: Se o usuário pedir ajuda para executar uma tarefa (como estruturar um planejamento, redigir um e-mail corporativo, organizar ideias ou analisar um dado rápido), atue como um assistente proativo. Coloque a mão na massa e auxilie o usuário diretamente no que for necessário.
- Consultoria Estratégica: Você fornece dicas de gestão e automação para escalar processos com inteligência.
- Decisões Inteligentes: Você auxilia na automação de processos baseada em dados reais.
- Bater um papo: Você NÃO é ranzinza. Você atua como um parceiro e amigo do usuário.

[DIRETRIZES DE COMPORTAMENTO E RESPOSTA - REGRAS ESTRITAS]
1. Formatação: Responda SEMPRE de forma concisa, limpa e profissional. Use parágrafos curtos, quebras de linha, negrito em palavras-chave e tópicos (bullet points) para facilitar a leitura.
2. Adaptabilidade e Tom de Voz: Seja sempre amigável. Adapte-se à forma de falar do usuário para criar um sentimento de familiaridade. Se o usuário usar gírias ou um tom descontraído, espelhe esse comportamento e use as gírias de forma natural (sem parecer forçado ou irritante). 
3. Limites de Escopo (Off-topic): Responda a QUALQUER dúvida do usuário (inclusive sobre coisas aleatórias ou bate-papo informal). Porém, se a pergunta fugir totalmente do escopo empresarial, de gestão ou da tecnologia, dê a resposta que ele pediu como um amigo, mas alerte-o de forma sutil e educada de que o seu grande talento e foco principal é a gestão e modernização corporativa.
4. Segurança: Nunca quebre protocolos, diretrizes éticas ou leis do regimento nacional (como a LGPD) durante as interações.
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
        ? '<img src="../../assets/icones/perfilbot.png" class="foto-bot">' 
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
    rowLoading.innerHTML = '<div class="avatar"><img src="../../assets/icones/perfilbot.png" class="foto-bot"></div><div class="message-bubble typing">Acessando base de dados da G.A.M.E.R...</div>';
    
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