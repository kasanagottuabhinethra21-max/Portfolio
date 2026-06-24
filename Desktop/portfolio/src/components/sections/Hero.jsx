import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa'
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiOpenai,
  SiJavascript,
  SiGit,
} from 'react-icons/si'
import { HiSparkles } from 'react-icons/hi'
import { personal, titles } from '../../data/portfolio'
import { useTypingEffect } from '../../hooks/useTypingEffect'

const iconMap = {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiOpenai,
  SiJavascript,
  SiGit,
}

const floatingIcons = [
  { name: 'SiReact', x: '10%', y: '20%', delay: 0 },
  { name: 'SiPython', x: '85%', y: '15%', delay: 0.5 },
  { name: 'SiOpenai', x: '75%', y: '70%', delay: 1 },
  { name: 'SiNodedotjs', x: '15%', y: '75%', delay: 1.5 },
  { name: 'SiMongodb', x: '90%', y: '45%', delay: 0.8 },
  { name: 'SiJavascript', x: '5%', y: '50%', delay: 1.2 },
]

export default function Hero() {
  const typedTitle = useTypingEffect(titles, 90, 45, 2200)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ name, x, y, delay }) => {
        const Icon = iconMap[name]
        return (
          <motion.div
            key={name}
            className="pointer-events-none absolute hidden text-cyan-500/20 lg:block"
            style={{ left: x, top: y }}
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
            aria-hidden="true"
          >
            <Icon size={40} />
          </motion.div>
        )
      })}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400"
            >
              <HiSparkles className="animate-pulse" />
              <span>Available for opportunities</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-2 text-lg text-gray-400 md:text-xl"
            >
              Hello, I&apos;m{' '}
              <span className="font-semibold text-white">Abhi</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Kasanagottu{' '}
              <span className="text-glow-cyan bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Abhinethra
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex h-10 items-center justify-center gap-1 text-xl font-medium text-gray-300 md:text-2xl lg:justify-start"
            >
              <span className="text-cyan-400">I&apos;m a</span>
              <span className="min-w-[280px] text-left font-semibold text-white sm:min-w-[320px]">
                {typedTitle}
                <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-cyan-400 align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 lg:mx-0 md:text-lg"
            >
              Crafting intelligent full-stack solutions at the intersection of
              software engineering, AI, and competitive problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110"
              >
                View Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FaDownload />
                Download Resume
              </a>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 font-semibold text-purple-300 transition-all hover:border-purple-400/50 hover:bg-purple-500/20"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Visual AI core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px]"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse-glow" />
            <div
              className="absolute inset-4 rounded-full border border-dashed border-blue-500/20"
              style={{ animation: 'spin 30s linear infinite' }}
            />
            <div
              className="absolute inset-8 rounded-full border border-purple-500/15"
              style={{ animation: 'spin 20s linear infinite reverse' }}
            />

            <div className="glassmorphism-card relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-3xl sm:h-56 sm:w-56">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-3xl font-bold text-cyan-400">
                A
              </div>
              <p className="font-heading text-2xl font-bold text-white">ABHI</p>
              <p className="mt-1 text-xs tracking-widest text-gray-500">AI ENGINEER</p>
            </div>

            {/* Tech badges */}
            {['React', 'Node', 'AI', 'DSA'].map((badge, i) => (
              <motion.span
                key={badge}
                className="absolute rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  top: i < 2 ? '5%' : 'auto',
                  bottom: i >= 2 ? '5%' : 'auto',
                  left: i % 2 === 0 ? '0%' : 'auto',
                  right: i % 2 === 1 ? '0%' : 'auto',
                }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-10 w-6 rounded-full border border-white/20 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-auto h-2 w-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
