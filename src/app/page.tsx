import { ProductCard } from "@/app/components/ProductCard";

export default function Home() {
	return (
		<main className="min-h-screen p-8 bg-slate-950">
			<h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">
				Ofertas Relâmpago
			</h1>

			{/* Grid Responsivo (Tailwind): 1 coluna no celular, 2 no tablet, 4 no PC */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{/* Adicionando alguns produtos manualmente para testar o visual */}
				<ProductCard
					id={1}
					name="Headset Gamer Redragon Zeus"
					price={299.9}
					image="https://m.media-amazon.com/images/I/61I2-3-bJFL._AC_SX679_.jpg"
				/>

				<ProductCard
					id={2}
					name="Teclado Mecânico Logitech G Pro"
					price={599.0}
					image="https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto:best,f_auto,dpr_auto/d_transparent.gif/content/dam/logitech/en/products/keyboards/pro-keyboard-x-keyboard/gallery/pro-x-keyboard-gallery-1.png"
				/>

				<ProductCard
					id={3}
					name="Mouse Gamer Razer Deathadder"
					price={189.9}
					image="https://m.media-amazon.com/images/I/6180RjYj44L._AC_SL1500_.jpg"
				/>
			</div>
		</main>
	);
}
