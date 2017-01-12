export default {
        particles: {
          number: {
            value: 30
          },
          color: {
            value: '#ff00ff'
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: 3
          },
          line_linked: {
            enable_auto: true,
            distance: 150,
            color: '#000000'
          },
          move: {
            direction: 'right',
            out_mode: 'out',
            speed: 1
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            },
            onhover: {
              enable: true,
              mode: 'bubble'
            }
          },
          modes: {
            bubble: {
              size: 5,
              duration: 5,
              distance: 150,
              opacity: .5
            }
          },
          detect_on: 'window'
        }
}
