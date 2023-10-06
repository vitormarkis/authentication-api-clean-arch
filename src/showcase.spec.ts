import Showcase from "@/showcase"

test("should return showcase name", async () => {
  const showcase = new Showcase()
  expect(showcase.getName()).toBe("Markis")
})
