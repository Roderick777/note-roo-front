import { PageTitle } from '../../components/PageTitle/PageTitle'

interface Props {}

export const About = () => {
  return (
    <div>
      <PageTitle>Acerca de</PageTitle>
      <div className="px-2">
        <p>
          Con NoteRoo puedes administrar tus notas de forma local, a medidas que
          las creas, modificas o eliminas estos cambios quedarán almacenados en
          tu dispositivo. Adicionalmente puedes separar tus notas por
          categorías, para poder ordenar y gestionar tus notas en diferentes
          ambitos de tu vida y trabajo.
          <br />
          <br />
          Esto corresponde a la primera etapa de lanzamiento de la aplicación y
          se encuentra sujeta a posibles cambios futuros
        </p>
      </div>
    </div>
  )
}

export default About
