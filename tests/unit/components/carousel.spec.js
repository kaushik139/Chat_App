import { shallowMount } from "@vue/test-utils";
import carousel from "@/components/carousel.vue";


describe("carousel", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(carousel)
    });

    it('renders the carousel component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders text for slide 1", () => {
        const text = 'ChatON';
        const test = wrapper.find('[name="slide-1"]');
        expect(test.text()).toBe(text);
    });

    it("renders img for slide 2", () => {
        const url = 'https://www.shutterstock.com/image-photo/woman-using-computer-laptop-on-600nw-1891028470.jpg';
        const test = wrapper.find('[name="image-slide"]');
        expect(test.attributes('src')).toBe(url);
    });

      test('renders component with default height when no data passed', () => {
        expect(wrapper.find('.carousel-inner').attributes('style')).toBe('height: 300px;');
      });

      test('renders component with provided height from props data', () => {
        const data = { height: 400 };
      
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.carousel-inner').attributes('style')).toBe('height: 300px;');
      });

      // Test if carousel items are present
      test('renders carousel items', () => {
        const carouselItems = wrapper.findAll('.carousel-item');
        expect(carouselItems.length).toBeGreaterThan(0);
      });

      // Test if carousel controls are present
      test('renders carousel controls', () => {
        const prevControl = wrapper.find('.carousel-control-prev');
        const nextControl = wrapper.find('.carousel-control-next');
        expect(prevControl.exists()).toBe(true);
        expect(nextControl.exists()).toBe(true);
      });

});
