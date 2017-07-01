package cn.sz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * Created by zhangzhen on 2017/7/1.
 */
@Controller
public class PageController {

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("msg","welcome");
        return "index";
    }

    @RequestMapping("/video")
    public String video(Model model) {
        return "video";
    }
}
