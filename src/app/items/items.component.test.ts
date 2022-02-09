import * as items_component from "./items.component"
// @ponicode
describe("items_component.ItemsComponent.addToCart", () => {
    let inst: any

    beforeEach(() => {
        inst = new items_component.ItemsComponent()
    })

    test("0", () => {
        inst.addToCart()
    })
})
