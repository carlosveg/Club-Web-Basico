const container = document.getElementById("api_info");

const getDataAPI = async (): Promise<void> => {
  const key: string = "XCe2rRk7qiPEGSrNxioNudgUuoyBNJy42FViZ8uc";
  const res: Response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
  const data = await res.json();

  const result: string = generarTarjeta(data);

  container.innerHTML = result;
};

const generarTarjeta = ({copyright, date, explanation, title, url}): string => {
  return `
    <div class="container">
      <section class="img">
        <figure>
          <img src="${url}" alt="${title}">
        </figure>
      </section>
      <section class="data">
        <h3>${title}</h3>
        <h4>Author (copyright): ${copyright}</h4>
        <h4>Date: ${date}</h4>
        <p>${explanation}</p>
      </section>
    </div>
    `;
};

getDataAPI();