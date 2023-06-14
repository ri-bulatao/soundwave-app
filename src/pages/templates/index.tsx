import '../../styles/main.scss'
import React, { useEffect } from 'react'
import type { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../../redux/reducers/templates'
import { templatesData } from '../../config/initialTemplates'

const Templates: React.FC = () => {
    
    const { templates } = useSelector((state: RootState) => state.templates)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(load(templatesData))
        console.log('Current State', templates)
        debugger
    }, [])

    return (
        <div>
            {
                templates.map(template => (
                    <div>
                        <h1>{template.title.text}</h1>
                        <p>{template.subTitle.text}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Templates
