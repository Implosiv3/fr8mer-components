# Fr8mer components

The library that includes the components that the Fr8mer engine will be able to use.

Components such as WhatsApp messages, Discord messages, Booking reviews, Youtube comments, etc. The components you need to enhance your videos!

#### Dependencies
Most of the components of this library has been built by hand. Some of the animated components are using `gsap` for an internal animation control.

### The animation system
We have components that are animated, and we have 2 animations:
- The general animation
  - The animation of the whole scene that is being rendered.
- The component animation
  - The animation of a specific element that is being displayed in the scene.

Thats why we have 2 different components in our code to provide the parameters we need to make the animated ones work properly.

Here you can see a simple code that will make you understand better how it works. We have the component that handles the general animation, as `AnimationProvider`, and then we have the one that is controlling the animation of the specific element, as `AnimationElementProvider`:
```
<Canvas>
    <AnimationProvider
        value={{
            frame: currentFrame,
            fps,
            time: currentFrame / fps,
        }}
    >
        <AnimationElementProvider
            value={{
                progress: progress,
                frame: currentFrame,
                time: currentFrame / fps
            }}
        >
            <Component {...(componentProps as T)} />
        </AnimationElementProvider>
    </AnimationProvider>
</Canvas>
```
And here you have one animated component that will show you how both animations are being used. There is a `frame` property that comes from the general animation, and its used to make the bar feel in movement during the whole scene render. Then we have `progress`, which is to control how the bar is loading.
```
export function SimpleProgressBar({
    stripesSpeed = 1,
}: Props) {
    const { frame } = useAnimation();
    const { progress } = useAnimationElement();
    const stripesOffset = -(frame * stripesSpeed);

    return (
        <div className="progress-bar">
            <div
                className="progress-bar__fill"
                style={{
                    clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
                }}
            >
                <div
                    className="progress-bar__stripes"
                    style={{
                        transform: `translateX(${stripesOffset}px)`,
                    }}
                />
            </div>
        </div>
    );
}
```