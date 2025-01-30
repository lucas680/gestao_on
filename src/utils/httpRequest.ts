import { closeLoading, openLoading } from "./utils";

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const httpRequest = async (
  endpoint: string,
  method: HttpMethod,
  silence = false
): Promise<unknown> => {

  if (!silence) openLoading();

  // Configuração dos headers padrão
  const config: RequestInit = {
    method,
    headers: {
      accept: 'application/json',
      Authorization: '',
    },
  };

  try {
    const response = await fetch(endpoint, {
      ...config,
    });

    // Verifica se a resposta é um erro HTTP (status code 4xx ou 5xx)
    if (!response.ok) {
      throw new Error('Erro ao realizar requisição'); // Lança o `userMessage` ou uma mensagem genérica
    }

    const data = await response.json();
    
    if (!silence) closeLoading();
    
    return data;
  } catch (error) {
    if (!silence) closeLoading();
    if (error instanceof TypeError) {
      // Lida com erros de rede (falha na conexão, CORS, etc.)
      throw error;
    }

    // Lida com outros tipos de erros (incluindo o erro HTTP lançado acima)
    throw error;
  }
};
