module ApplicationHelper
	def main_nav
		nav_str = "<nav id='main-nav' class='navbar navbar-default' role='navigation'>"
			nav_str += "<div class='container'>"

			# begin nav header (logo and mobile menu)
			nav_str += "<div class='navbar-header'>"

				nav_str += "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse'>"
					nav_str += "<span class='sr-only'>Toggle Navigation</span>"
					nav_str += "<span class='icon-bar'></span>"
					nav_str += "<span class='icon-bar'></span>"
					nav_str += "<span class='icon-bar'></span>"
				nav_str += "</button>"

				nav_str += link_to("Road Trekker", root_path, class: "navbar-brand")
			nav_str += "</div>"
			# End nav header (logo and mobile menu)

			# nav links
			nav_str += "<div  id='navbar-collapse' class='collapse navbar-collapse'>"
				nav_str += "<ul class='nav navbar-nav'>"

					nav_str += "<li>"
						nav_str += link_to(raw("Blog<span class='sr-only'></span>"), page_blog_path, class: (action_name == "blog" ? "current" : ""))
					nav_str += "</li>"

					nav_str += "<li>"
						nav_str += link_to("Contact", page_contact_path)
					nav_str += "</li>"

					nav_str += "<li>"
						nav_str += link_to("About", page_about_path)
					nav_str += "</li>"

				nav_str += "</ul>"
			# End main nav links

			# right side login link
		nav_str += "<ul id='nav-login' class='nav navbar-nav pull-right'>"
		if user_signed_in?
			nav_str += "<li>" + link_to("Logout", destroy_user_session_path, :method => "delete") + "</li>"
		else
			nav_str += "<li>" + link_to("Login", new_user_session_path) + "</li>"
		end
		nav_str += "</ul>"
			# end login link

			nav_str += "</div>"
			# End nav links

			nav_str += "</div>"
		# End nav container
		nav_str += "</nav>"
		# End main-nav

		return nav_str.html_safe
	end

	def user_options
		options_str = "<div id='user_options' class='col-lg-2'>"
		  options_str += "<h3>I want to see:</h3>"
      options_str += "<ul>"
        options_str += "<li>Map</li>"
        options_str += "<li>Gas Prices</li>"
        options_str += "<li>Construction Reports</li>"
        options_str += "<li>Weather</li>"
      options_str +="</ul>"
		options_str += "</div>"

		return options_str.html_safe
	end

	def main_footer
		footer_str = "<footer id='main-footer' class='container text-center'>"
			footer_str += "<div class='copyright'>"
				footer_str += "<p>&copy; roadtrekker.com 2015 All rights reserved</p>"
			footer_str += "</div>"
		footer_str += "</footer>"

		return footer_str.html_safe
	end
end
