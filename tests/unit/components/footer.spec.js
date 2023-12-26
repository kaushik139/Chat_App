import { shallowMount } from "@vue/test-utils";
import footer from "@/components/footer.vue";


describe("footer", () => {
    let wrapper;

    // beforeEach(() => {
    //     wrapper = shallowshallowMount(footer)
    // });

    it('renders the footer component', () => {
        const wrapper = shallowMount(footer);
        expect(wrapper.exists()).toBe(true);
    });

    test('renders component with default height', () => {
        const wrapper = shallowMount(footer);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.cont_footer').attributes('style')).toBe('height: 200px;');
      });
    
      // Test if the component renders with provided height from props
      test('renders component with provided height from props', () => {
        const height = 300;
        const wrapper = shallowMount(footer, {
          propsData: { height },
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.cont_footer').attributes('style')).toBe(`height: ${height}px;`);
      });
    
      // Test if the year is correctly displayed
      test('displays current year', () => {
        const currentYear = new Date().getFullYear();
        const wrapper = shallowMount(footer);
        const yearText = wrapper.find('.text').text();
        expect(yearText).toContain(`© ChatON ${currentYear}`);
      });

});
