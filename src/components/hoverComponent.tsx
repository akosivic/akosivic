import { useState } from 'react'

function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
}

function HoverComponent(props: any) {
    const [buttonAIsHovering, buttonAHoverProps] = useHover()

    return (
            <p  {...buttonAHoverProps}>
                {buttonAIsHovering ? props.HoverText : props.Text }
            </p>
    )
};
export default HoverComponent;