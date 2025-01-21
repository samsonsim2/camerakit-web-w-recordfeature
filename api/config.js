export const config = {
    runtime: "edge",
  }
  
  export default function handler(request) {
    const config = `export const CONFIG = {
      LENS_ID: "${process.env.LENS_ID}",
      GROUP_ID: "${process.env.GROUP_ID}",
      API_TOKEN: "${process.env.API_TOKEN}"
    }`
  
    return new Response(config, {
      headers: {
        "Content-Type": "application/javascript",
      },
    })
  }