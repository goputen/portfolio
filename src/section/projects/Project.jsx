import ProjectCard from './card/ProjectCard'
import viberr from '../../assets/mitlogo.png'
import styles from './Project.module.css'
import moviescreenshot from '../../assets/moviescreenshot.png'
import projectPic from '../../assets/project.jpg'
function Project() {
  return (
<section className={styles.container}>
  <h1 className={styles.projecttitle}>Project</h1>
  <div className={styles.projectContainer}>
   <ProjectCard viberr={viberr} h3="Paper Website" p="full-stack project" link="http://mitpaperdown.rf.gd/MIT/login.php/"></ProjectCard>
   <ProjectCard viberr={moviescreenshot} h3="Movie website" p="front-end project" link="https://goputen.github.io/movieszone/"></ProjectCard>
    <ProjectCard viberr={projectPic} h3="IMDB clone" p="front-end project" link="https://imdb-clone-one-rho.vercel.app/"></ProjectCard>
  </div>
</section>
  )
}

export default Project
