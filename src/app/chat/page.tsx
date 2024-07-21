import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default async function CreatePage() {
  return (
      <div
        className="relative hidden flex-col items-start gap-8 md:flex"
      >
        <section className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Food Inventory
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="inventory">What is in your fridge right now?</Label>
              <Textarea
                id="inventory"
                placeholder="You are a..."
                className="min-h-[9.5rem]"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="allergies">Any allergies to keep in mind?</Label>
              <Textarea
                id="allergies"
                placeholder="You are a..."
                className="min-h-[9.5rem]"
              />
            </div>
          </fieldset>
          
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Recent Recipes
            </legend>
            <div className="grid gap-3">
              
            </div>
            <div className="grid gap-3">

            </div>
          </fieldset>

        </section>
      </div>
  )
}
  