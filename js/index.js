import {Router} from "./router.js"
import ChangeBackground from "./changeBackground.js"
import {
    universe,
    exploration,
    home
} from "./elements.js"
ChangeBackground({universe, exploration, home})
const router = new Router()
router.add('/', '/pages/home.html')
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()
