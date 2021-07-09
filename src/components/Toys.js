import { useEffect, useRef } from 'react';
import {
  Engine,
  Render,
  Bodies,
  Common,
  Composites,
  Composite,
} from 'matter-js';
import box from './icons/box.png';
import car from './icons/car.png';
import ball from './icons/ball.png';
import gift from './icons/gift.png';

function Toys({ percentage }) {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = 800;
    const ch = 600;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: '#dedede',
      },
    });

    console.log(engine.current);

    // add limit
    Composite.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    // run animation
    Engine.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      Composite.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [percentage]);

  useEffect(() => {
    const stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8));
      const random = Math.round(Common.random(0, 10));
      if (random < 3) {
        return Bodies.rectangle(
          x,
          y,
          Common.random(25, 50),
          Common.random(25, 50),
          {
            render: {
              strokeStyle: '#ffffff',
              sprite: {
                texture: box,
              },
            },
          },
        );
      } else if (random < 6) {
        return Bodies.rectangle(
          x,
          y,
          Common.random(80, 120),
          Common.random(25, 30),
          {
            render: {
              strokeStyle: '#ffffff',
              sprite: {
                texture: car,
              },
            },
          },
        );
      } else if (random < 8) {
        return Bodies.rectangle(
          x,
          y,
          Common.random(80, 120),
          Common.random(25, 30),
          {
            render: {
              strokeStyle: '#ffffff',
              sprite: {
                texture: gift,
              },
            },
          },
        );
      } else {
        console.log('else');
        return Bodies.polygon(x, y, sides, Common.random(25, 50), {
          render: {
            strokeStyle: '#ffffff',
            sprite: {
              texture: ball,
            },
          },
        });
      }
    });
    Composite.add(engine.current.world, [stack]);
  }, [percentage]);

  return (
    <div>
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default Toys;
