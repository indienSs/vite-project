import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/button-counter')({
    component: ButtonCounter,
})

function ButtonCounter() {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div className="p-2">
            <Button
                onClick={() =>
                    setTimeout(() => setCounter((prev) => prev + 1), 1000)
                }
            >
                Increment
            </Button>
            <p>{counter}</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    <AccordionContent>
                        No. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    <AccordionContent>Maybe. Third variant.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
