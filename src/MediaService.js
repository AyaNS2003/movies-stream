import DisplayService from "./DisplayService";

const MediaServices = () => {
    const services = [
        { imgLink: '/img/apple.png', ServiceName: 'Apple TV', id: 1 },
        { imgLink: '/img/disney.png', ServiceName: 'Disney TV', id: 2 },
        { imgLink: '/img/HBO.png', ServiceName: 'HBO Max', id: 3 },
        { imgLink: '/img/hulu.png', ServiceName: 'Hulu', id: 4 },
        { imgLink: '/img/netflix.png', ServiceName: 'Netflix', id: 5 },
        { imgLink: '/img/prime.png', ServiceName: 'Prime', id: 6 }
    ];

    return (
        <div className="MediaServices">
            {services.map(service => (
                <div>
                    <img src={service.imgLink}/>
                    <p>{ service.ServiceName }</p>
                </div>
            ))}
        </div>
    );
}

export default MediaServices;
