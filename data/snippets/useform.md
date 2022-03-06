---
    title: 'useForm'
    description: 'React State hook for form input values.'
    slug: 'useform'
    logo: 'react.png'
    createdAt: '06/03/2022'
--- 

```js
    import { useState } from "react";

    const useForm = (initialstates) => {
        const [values, setValues] = useState(initialstates);

        const handleChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

        return [values, handleChange]
    }

    export default useForm
```