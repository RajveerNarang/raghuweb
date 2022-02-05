import React, { useEffect, useRef } from 'react';

function Stars({limit}) {

	const starRef = useRef(null)

	useEffect(() => {
		const canvas = starRef.current;
		canvas.style.position = 'absolute';
		const ctx = canvas.getContext('2d');
		
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		let frameCount = 0
		let animationFrameId
		let stars = []
		
		const draw = (frameCount) => {
			stars.map((star, index) => {
				if (index % 3 === 0) {
					ctx.fillStyle = '#ffffff'
					ctx.beginPath()
					ctx.arc(star.posX, star.posY, star.radius * Math.sin(frameCount*0.05)**2, 0, 2 * Math.PI)
					ctx.fill()
				} else {
					ctx.fillStyle = '#ffffff'
					ctx.beginPath()
					ctx.arc(star.posX, star.posY, star.radius * Math.sin(frameCount*0.03)**2, 0, 2 * Math.PI)
					ctx.fill()
				}
				return 'Success'
			})
		}

		const setSize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			
			stars = []
			for (let i = 0; i < limit; i++) {
				const margins = {
					posX: Math.random() * window.innerWidth,
					posY: Math.random() * window.innerHeight,
					radius: Math.floor(Math.random() * (3 - 1) + 1)
				}
				stars.push(margins)
			}
		}

		setSize()

		const render = () => {
			animationFrameId = requestAnimationFrame(render)
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)


			window.addEventListener('resize', setSize)

			frameCount++;
			draw(frameCount);

		}

		render()
		return () => {
			cancelAnimationFrame(animationFrameId)
			window.removeEventListener('resize', setSize)
		}
			
	}, [limit]);
	

	return <canvas ref={starRef} ></canvas>;
}

export default Stars;
