import React from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { questions } from './data'
import Question from './Question'

const Faq = () => {
    return (
        <section id="faq">
            <div className="container faq">
                <div className="u-title" data-aos="fade-up">
                    <MdOutlineLibraryBooks color="orangered" size={30} />
                    <h2>FAQs</h2>
                    <p className="u-text-small">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Similique itaque veniam laudantium, quam quas
                        dolor tempora eligendi officia sequi. Iusto.
                    </p>
                </div>
                <div className="questions">
                    {questions.map((question) => (
                        <Question
                            key={question.id}
                            title={question.title}
                            answer={question.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
