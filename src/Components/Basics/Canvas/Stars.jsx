import React, { useEffect, useRef } from 'react';

/**
 * Renders a canvas with stars based on the given limit.
 *
 * @param {number} limit - The number of stars to render on the canvas.
 * @return {JSX.Element} The canvas element with stars.
 */
const Stars = ({limit}) => {

	const starRef = useRef(null)

	useEffect(() => {
		const canvas = starRef.current;
		canvas.style.position = 'fixed';
		const ctx = canvas.getContext('2d');
		
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		let frameCount = 0
		let animationFrameId
		let stars = []
		
		/**
		 * Draws stars on a canvas based on the given frame count.
		 *
		 * @param {number} frameCount - The current frame count.
		 * @return {Array<string>} An array of 'Success' strings, one for each star drawn.
		 */
		const draw = (frameCount) => {
			stars.map((star, index) => {
				if (index % 3 === 0) {
					ctx.fillStyle = '#ffffff'
					ctx.beginPath();
					ctx.arc(
						star.posX, 
						star.posY, 
						star.radius * Math.sin(frameCount*0.05)**2, 
						0, 
						2 * Math.PI
					)
					ctx.fill()
				} else {
					ctx.fillStyle = '#ffffff'
					ctx.beginPath();
					ctx.arc(
						star.posX, 
						star.posY, 
						star.radius * Math.sin(frameCount*0.03)**2, 
						0, 
						2 * Math.PI
					)
					ctx.fill()
				}
				return 'Success'
			})
		}

		/**
		 * Sets the size of the canvas to the window's inner width and height.
		 * Initializes an empty array for stars.
		 * Generates random margins for each star within the canvas bounds.
		 *
		 * @return {void} This function does not return anything.
		 */
		const setSize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			
			stars = []
			for (let i = 0; i < limit; i++) {
				const margins = {
					posX: (Math.random() * canvas.width),
					posY: (Math.random() * canvas.height),
					radius: Math.floor(Math.random() * (3 - 1) + 1)
				}
				stars.push(margins)
			}
		}

		setSize()

		/**
		 * Renders the animation frame by recursively calling itself, clearing the canvas,
		 * setting the size of the canvas to the window's inner width and height, and
		 * generating random margins for each star within the canvas bounds.
		 *
		 * @return {void} This function does not return anything.
		 */
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

	return <canvas ref={starRef} style={{ zIndex: -10 }} ></canvas>;
}

export default Stars;
