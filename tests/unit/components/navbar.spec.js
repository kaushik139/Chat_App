import { shallowMount } from "@vue/test-utils";
import navbar from "@/components/navBar.vue";


describe('navbar', () => {
    const data = {
      showLandingPageControls: true,
      showProfileChip: true,
    };
  
    // Test if the component renders
    test('renders the navbar component', () => {
      const wrapper = shallowMount(navbar, {
        propsData: { data },
      });
      expect(wrapper.exists()).toBe(true);
    });
  
    // Test if the navbar brand is rendered
    test('renders the navbar brand with correct text', () => {
      const wrapper = shallowMount(navbar, {
        propsData: { data },
      });
      const navbarBrand = wrapper.find('.navbar-brand');
      expect(navbarBrand.exists()).toBe(true);
      expect(navbarBrand.text()).toBe('ChatON');
    });
  
    // Test if login link is rendered when showLandingPageControls is true
    test('renders login link when showLandingPageControls is true', () => {
      const wrapper = shallowMount(navbar, {
        propsData: { data },
      });
      const loginLink = wrapper.find('.navOptions .nav-link');
      expect(loginLink.exists()).toBe(true);
      expect(loginLink.text()).toBe('Login');
    });
  
    // Test if profile chip is rendered when showProfileChip is true
    test('renders profile chip when showProfileChip is true', () => {
      const wrapper = shallowMount(navbar, {
        propsData: { data },
      });
      const profileChip = wrapper.find('.chip');
      expect(profileChip.exists()).toBe(true);
    });

});
