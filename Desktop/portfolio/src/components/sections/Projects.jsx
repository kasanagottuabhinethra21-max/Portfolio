import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { projects } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import TiltCard from '../ui/TiltCard'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Projects"
          title="Featured Work"
          subtitle="Real-world applications built with modern technologies"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <TiltCard>
                <article className="glassmorphism-card group relative h-full overflow-hidden rounded-2xl">
                  {/* Project header gradient */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
                    <div className="absolute inset-0 cyber-grid opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <HiSparkles className="mx-auto mb-2 text-3xl text-cyan-400" />
                        <h3 className="font-heading text-2xl font-bold text-white">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-cyan-400/80">{project.tagline}</p>
                      </div>
                    </div>

                    {project.featured && (
                      <span className="absolute right-4 top-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                        Featured
                      </span>
                    )}

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all hover:bg-cyan-500/30 hover:text-cyan-400"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all hover:bg-cyan-500/30 hover:text-cyan-400"
                        aria-label={`View ${project.name} live demo`}
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 py-2.5 text-sm font-medium text-cyan-400 transition-all hover:from-cyan-500/30 hover:to-blue-500/30"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
