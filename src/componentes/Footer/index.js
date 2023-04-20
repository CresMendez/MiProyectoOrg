import "./Footer.css"

const Footer = () => {
    //backgorud se pone aqui por la ruta de public linkedin
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a without rel="noreferrer" href='https://www.linkedin.com/in/crescencio-mendez/' target='_blank'>
                <img src="/img/linkedinyes.png" alt='linkedin' />
            </a>
            <a without rel="noreferrer" href='https://www.linkedin.com/in/crescencio-mendez/' target='_blank'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a without rel="noreferrer" href='https://www.linkedin.com/in/crescencio-mendez/' target='_blank'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a without rel="noreferrer" href='https://www.linkedin.com/in/crescencio-mendez/' target='_blank'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por: <br/> Crescencio Mendez Ara</strong>
    </footer>
}

export default Footer