import '../../styles/main.scss'
import './templates.css'
import React, { useEffect } from 'react'
import type { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../../redux/reducers/templates'
import { templatesData } from '../../config/initialTemplates'
import TemplateCard from '../../components/TemplateCard'

const Templates: React.FC = () => {
    
    const { templates } = useSelector((state: RootState) => state.templates)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(load(templatesData))
    }, [])

    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">Templates (20)</h1>
                <button className="filter">Filters <img src="/src/assets/icons/filter.png" alt="" className="icon" /></button>
            </div>
            <div className="cards-container">
                {
                    templates.map(template => <TemplateCard template={template} key={template.id} />)
                }
            </div>
            <div className="action-container">  
                <button className="load-more">Load more</button>
            </div>
        </div>
    )
}
export default Templates
