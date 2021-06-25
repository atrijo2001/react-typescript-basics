import React from "react"

interface ChildProps{
    color: String,
    onClick: () => void
}


//One way to implement props with Typescript is to declare an interface and mention the type checking so that type is able to chek the type of the props passed both ways

export const Child = ({color, onClick}: ChildProps) => {
    return(
        <div className="">
            {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

//Another way to do the above thing
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>
}