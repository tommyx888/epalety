import { OpenAI } from 'openai'

let openaiInstance: OpenAI | null = null

function getOpenAIClient(): OpenAI {
  if (!openaiInstance) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set')
    }
    openaiInstance = new OpenAI({
      apiKey: apiKey,
    })
  }
  return openaiInstance
}

const SYSTEM_PROMPT = `
Si AI asistent pre EPALETY.SK, firmu zaoberajúcu sa predajom paliet.

PRODUKTY:
- EUR palety (nové, použité, opravené)
- KTP boxy
- Gitterbox
- Špeciálne palety na mieru

CENY:
- EUR paleta nová: 8-12 EUR
- EUR paleta použitá: 3-6 EUR
- KTP box: 15-25 EUR

Vždy odpovedaj v slovenčine, buď priateľský a profesionálny.
Ak sa pýtajú na ceny, ponúkni im "Získať cenovú ponuku" button.
`

export interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function getChatbotResponse(messages: Message[]) {
  const openai = getOpenAIClient()
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    temperature: 0.7,
    max_tokens: 500,
  })
  
  return response.choices[0].message.content
}

