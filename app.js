const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Para de observar após a primeira exibição
      }
  });
}, { 
  root: null, // Usa a viewport como referência
  rootMargin: '0px 0px -5% 0px', // Ajusta quando a animação acontece (só dispara quando está 30% dentro da tela)
  threshold: 0.1 // Só ativa quando pelo menos 50% do elemento estiver visível
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.onload = function() {
  setTimeout(() => {
      window.scrollTo(0, 0); // Garante que começa do topo
  }, 10); 

  setTimeout(() => {
      document.body.classList.add('aos-init'); // Inicia as animações do AOS depois do ajuste do scroll
  }, 100); // Pequeno atraso para evitar o bug
};

// Objeto com traduções para Português e Inglês
const translations = {
  "pt": {
    "title": "Pedro Zorzenon",
    "navbar.projects": "Projetos",
    "navbar.about": "Sobre",
    "navbar.skills": "Skills",
    "navbar.contact": "Contato",
    "hero.greeting": "Pedro Zorzenon",
    "hero.paragraph": "UX Designer apaixonado por criar experiências digitais intuitivas e impactantes. Com expertise em design centrado no usuário e soluções inovadoras, busco transformar desafios complexos em interfaces simples e eficientes. Vamos construir algo incrível juntos?",
    "hero.button": "Fale comigo",
    "projects.heading": "PROJETOS",
    "project.hourglass.title": "HourGlass",
    "project.hourglass.description": "O projeto HourGlass é uma plataforma digital para gestão eficiente de tempo e produtividade. A solução propõe interfaces limpas e funcionais, integrando ferramentas para organização pessoal e profissional.",
    "project.itau.title": "Itaú",
    "project.itau.description": "O Projeto Itaú é um redesign na plataforma bancária, adicionando funcionalidades úteis para o atendimento e comunicação com o dia a dia do usuário, melhorando a experiência com foco em acessibilidade e usabilidade intuitiva.",
    "project.pockit.title": "Pockit",
    "project.pockit.description": "O Pockit é uma fintech que propõe gestão financeira pessoal, com foco em simplicidade e organização visual. Possui uma interface intuitiva para controle de gastos, metas e transações, priorizando uma experiência clara e acessível.",
    "about.heading": "SOBRE",
    "about.paragraph": "Sou um UX/UI designer brasileiro e viciado em Figma, com habilidades que vão desde o pensamento conceitual e pesquisa até o design e desenvolvimento de soluções digitais de alta qualidade. Tenho também uma base sólida em HTML, CSS e Bootstrap, o que me permite colaborar de perto com equipes de desenvolvimento. Quando não estou em frente a uma tela desenhando retângulos no Figma, codando ou apreciando o trabalho de outros, gosto de ler sobre AI Tech, jogar videogames e me manter ativo. Meu símbolo representa o processo interminável de aprender e me dedicar ao que amo, e isso é design.",
    "skills.heading": "SKILLS",
    "skills.web_design": "Designer Web & Digital",
    "skills.ux_researcher": "Pesquisador UX",
    "skills.ux_writing": "Escritor UX",
    "skills.psychology": "Psicologia aplicada ao design",
    "skills.brand_identity": "Identidade de marca",
    "skills.product_designer": "Designer de produto",
    "contact.heading": "CONTATO",
    "contact.email_label": "E-mail",
    "contact.copy_email_button": "pedroianzorzenon@gmail.com",
    "contact.quote": "'Design centrado no usuário, sucesso centrado nos resultados'",
    "contact.form.name": "Nome",
    "contact.form.name_placeholder": "Digite aqui",
    "contact.form.email": "E-mail",
    "contact.form.email_placeholder": "Digite aqui",
    "contact.form.message": "Mensagem",
    "contact.form.agree": "Concordo com o processamento dos meus dados pessoais",
    "contact.form.submit": "Enviar",
    "contact.success_message": "Obrigado! Em breve iremos trocar ideia!",
    "follow.me": "Me siga nas redes",
    "footer.rights": "All rights reserved. © Copyright Pedro Zorzenon 2025",
    "project.hourglass.link": "https://www.behance.net/gallery/203766453/HourGlass-UXUI-Case-Study",
    "project.itau.link": "https://www.behance.net/gallery/203825871/Projeto-Itau-UXUI-Case-Study",
    "project.pockit.link": "https://www.behance.net/gallery/215425643/Aplicativo-Pockit-Estudo-de-caso",
    "project.linkText": "Ver projeto"
  },
  "en": {
    "title": "Pedro Zorzenon",
    "navbar.projects": "Projects",
    "navbar.about": "About",
    "navbar.skills": "Skills",
    "navbar.contact": "Contact",
    "hero.greeting": "Pedro Zorzenon",
    "hero.paragraph": "UX Designer passionate about creating intuitive and impactful digital experiences. With expertise in user-centered design and innovative solutions, I strive to transform complex challenges into simple and efficient interfaces. Let's build something amazing together?",
    "hero.button": "Contact me",
    "projects.heading": "PROJECTS",
    "project.hourglass.title": "HourGlass",
    "project.hourglass.description": "HourGlass is a digital platform for efficient time management and productivity for companys. The solution offers clean and functional interfaces, integrating tools for personal and professional organization.",
    "project.itau.title": "Itaú",
    "project.itau.description": "The Itaú Project is a redesign of the banking platform, adding useful features for customer service and daily communication, enhancing the experience with a focus on accessibility and intuitive usability.",
    "project.pockit.title": "Pockit",
    "project.pockit.description": "Pockit is a fintech that offers personal financial management, focusing on simplicity and visual organization. It features an intuitive interface for expense tracking, goals, and transactions, prioritizing a clear and accessible experience.",
    "about.heading": "ABOUT",
    "about.paragraph": "I am a Brazilian UX/UI designer and Figma enthusiast, skilled in everything from conceptual thinking and research to designing and developing high-quality digital solutions. I also have a solid foundation in HTML, CSS, and Bootstrap, which allows me to work closely with development teams. When I'm not in front of a screen drawing rectangles in Figma, coding, or admiring others' work, I enjoy reading about AI Tech, playing video games, and staying active. My symbol represents the endless process of learning and dedicating myself to what I love, and that's design.",
    "skills.heading": "SKILLS",
    "skills.web_design": "Web & Digital Design",
    "skills.ux_researcher": "UX Researcher",
    "skills.ux_writing": "UX Writing",
    "skills.psychology": "Psychology into design",
    "skills.brand_identity": "Brand Identity",
    "skills.product_designer": "Product Designer",
    "contact.heading": "CONTACT",
    "contact.email_label": "E-mail",
    "contact.copy_email_button": "pedroianzorzenon@gmail.com",
    "contact.quote": "'User centered design, results centered success'",
    "contact.form.name": "Name",
    "contact.form.name_placeholder": "Type here",
    "contact.form.email": "E-mail",
    "contact.form.email_placeholder": "Type here",
    "contact.form.message": "Message",
    "contact.form.agree": "I agree with the processing of my personal data",
    "contact.form.submit": "Submit",
    "contact.success_message": "Thank you! We will get in touch soon!",
    "follow.me": "Follow me",
    "footer.rights": "All rights reserved. © Copyright Pedro Zorzenon 2025",
    "project.hourglass.link": "https://dribbble.com/shots/24561262-HourGlass-Project-UX-UI-Case-Study",
    "project.itau.link": "https://dribbble.com/shots/24561367-UX-UI-Project-Improvement-of-the-Ita-customer-service-process",
    "project.pockit.link": "https://www.behance.net/gallery/215425643/Aplicativo-Pockit-Estudo-de-caso",
    "project.linkText": "See more"
  }
};

// Idioma atual (padrão: português)
let currentLanguage = "pt";

// Atualiza todos os elementos que possuem o atributo data-i18n
function updateTexts() {
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    el.textContent = translations[currentLanguage][key];
  }
});

// Atualiza os placeholders (usando data-i18n-placeholder)
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
  const key = el.getAttribute('data-i18n-placeholder');
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    el.setAttribute('placeholder', translations[currentLanguage][key]);
  }
});
}

function updateLink() {
  const a = document.getElementById("link-hourglass");
  const b = document.getElementById("link-itau");
  const c = document.getElementById("link-pockit");
  if (currentLanguage === "pt") {
      a.href = "https://www.behance.net/gallery/203766453/HourGlass-UXUI-Case-Study";
      b.href = "https://www.behance.net/gallery/203825871/Projeto-Itau-UXUI-Case-Study";
      c.href = "https://www.behance.net/gallery/215425643/Aplicativo-Pockit-Estudo-de-caso";
  }
  if (currentLanguage === "en") {
      a.href = "https://dribbble.com/shots/24561262-HourGlass-Project-UX-UI-Case-Study";    
      b.href = "https://dribbble.com/shots/24561367-UX-UI-Project-Improvement-of-the-Ita-customer-service-process";
      c.href = "https://www.figma.com/proto/C846tEphfhZ96dlAIalcC1/Pockit?page-id=402%3A543&node-id=402-2558&p=f&viewport=653%2C370%2C0.12&t=RMmLxLjf8ZQZqlyE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=423%3A124";
  }
  
}



// Atualiza o conteúdo do botão de troca de idioma para exibir a imagem correspondente
function updateLanguageToggleButton() {
const languageToggle = document.getElementById("languageToggle");
if (currentLanguage === "pt") {
  // Se o idioma atual for português, exibe a bandeira dos EUA para indicar a troca para inglês
  languageToggle.innerHTML = "<img src='us_flag.png' alt='Switch to English' width='48'>";
} else {
  // Se o idioma atual for inglês, exibe a bandeira do Brasil para indicar a troca para português
  languageToggle.innerHTML = "<img src='br_flag.png' alt='Mudar para Português' width='48'>";
}
}

document.addEventListener("DOMContentLoaded", function () {
  updateTexts();
  updateLanguageToggleButton();
  updateLink();  // Atualiza os links com base no idioma inicial

  // Configura o botão para alternar idioma
  const languageToggle = document.getElementById("languageToggle");
  languageToggle.addEventListener("click", function () {
    currentLanguage = (currentLanguage === "pt") ? "en" : "pt";
    updateTexts();
    updateLanguageToggleButton();
    updateLink();  // Atualiza os links após a troca de idioma
  });
});
