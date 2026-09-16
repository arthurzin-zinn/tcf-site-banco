import './style.css'
import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.ts'
import tituloLogin from './components/tituloLogin.tsx'
import containerLogin from './components/containerLogin.tsx'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
 <tituloLogin/>
 <containerLogin/>
<div/>
`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
