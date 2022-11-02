package com.casestudy.controller;

import com.casestudy.model.customer.Customer;
import com.casestudy.service.customer.ICustomerService;
import com.casestudy.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping("/customer")
public class CustomerRestController {

    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @GetMapping("/list")
    public ResponseEntity<Page<Customer>> showCustomerList(Optional<String> nameSearch,
                                                           Optional<String> addressSearch,
                                                           Optional<String> phoneSearch,
                                                           @PageableDefault(value = 5) Pageable pageable) {
        System.out.println("sfcv");
        String a = nameSearch.orElse("");
        String b = addressSearch.orElse("");
        String c = phoneSearch.orElse("");
        Page<Customer> customerPage = iCustomerService.search(pageable, a, b, c);
        if (customerPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerPage, HttpStatus.OK);
    }
//    public String showCustomerList(@PageableDefault(value = 5, sort = "customer_name", direction = Sort.Direction.ASC) Pageable pageable,
//                                   @RequestParam(value = "nameSearch", defaultValue = "") String nameSearch,
//                                   @RequestParam(value = "addressSearch", defaultValue = "") String addressSearch,
//                                   @RequestParam(value = "phoneSearch", defaultValue = "") String phoneSearch,
//                                   Model model) {
//        List<CustomerType> customerTypes = iCustomerTypeService.showListTypeCustomer();
//        Page<Customer> customers = iCustomerService.search(pageable, nameSearch, addressSearch, phoneSearch);
//        model.addAttribute("nameSearch", nameSearch);
//        model.addAttribute("addressSearch", addressSearch);
//        model.addAttribute("phoneSearch", phoneSearch);
//        model.addAttribute("customerTypes", customerTypes);
//        model.addAttribute("customerList", customers);
//        return "customer/list";
//    }

//    @GetMapping("/create")
//    public String createCustomer(Model model) {
//        model.addAttribute("customerTypes", iCustomerTypeService.showListTypeCustomer());
//        model.addAttribute("customerDto", new CustomerDto());
//        return "customer/create";
//    }
//
//    @PostMapping("/add")
//    public String saveCustomer(@Validated @ModelAttribute CustomerDto customerDto, BindingResult bindingResult,
//                               RedirectAttributes redirectAttributes, Model model) {
//        if (bindingResult.hasFieldErrors()) {
//            model.addAttribute("customerTypes", iCustomerTypeService.showListTypeCustomer());
//            return "customer/create";
//        } else {
//            Customer customer = new Customer();
//            BeanUtils.copyProperties(customerDto, customer);
//            iCustomerService.addNewCustomer(customer);
//
//            redirectAttributes.addFlashAttribute("mess", "Add new customer successfully!");
//            return "redirect:/customer/list";
//        }
//    }
//
//    @GetMapping("/edit/{id}")
//    public String editCustomer(@PathVariable int id, Model model) {
//        model.addAttribute("customerTypes", iCustomerTypeService.showListTypeCustomer());
//        model.addAttribute("customer", iCustomerService.findById(id));
//        return "customer/edit";
//    }
//
//    @PostMapping("/update")
//    public String updateCustomer(@Validated @ModelAttribute("customer") CustomerDto customerDto, BindingResult bindingResult,
//                                 RedirectAttributes redirectAttributes, Model model) {
//        if (bindingResult.hasFieldErrors()) {
//            model.addAttribute("customerTypes", iCustomerTypeService.showListTypeCustomer());
//            return "customer/edit";
//        } else {
//            Customer customer = new Customer();
//            BeanUtils.copyProperties(customerDto, customer);
//            iCustomerService.updateCustomer(customer);
//            redirectAttributes.addFlashAttribute("mess", "Update customer successfully!");
//            return "redirect:/customer/list";
//        }
//    }
//
//    @GetMapping("/delete")
//    public String deleteCustomer(@RequestParam int id, RedirectAttributes redirectAttributes) {
//        iCustomerService.deleteLogical(id);
//        redirectAttributes.addFlashAttribute("mess", "Delete customer successfully!");
//        return "redirect:/customer/list";
//    }
//
//    @GetMapping("/view")
//    public String viewCustomer(@RequestParam int id) {
//        iCustomerService.findById(id);
//        return "redirect:/customer/list";
//    }
}
