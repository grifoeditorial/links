const urls = {
  bushin: "https://grifoeditorial.com",
  fastplay:
    "https://grifoeditorial.com/2015/12/24/genesys-rpg-fast-play-atualizado/",
  genesys:
    "https://grifoeditorial.com/2015/12/24/genesys-rpg-fast-play-atualizado/",
  "genesys-faq":
    "https://grifoeditorial.com/2016/06/21/genesys-faq-perguntas-mais-frequentes/",
  faq:
    "https://grifoeditorial.com/2016/06/21/genesys-faq-perguntas-mais-frequentes/",
};

export default (req, res) => {
  const url = urls[req.url.substring(1)] || "https://grifoeditorial.com";

  res.writeHead(302, {
    Location: url,
  });

  res.end();
};
