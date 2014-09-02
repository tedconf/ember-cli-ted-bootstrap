module TedBootstrapHelper

  def tb_header(options={}, &blk)
    options = {
      app_name:   Rails.application.class.to_s.split('::').first.titleize,
      app_root:   '/',
      hamburger:  true,
      logo_side:  :left,
      captured:   nil
    }.merge(options)

    if block_given?
      options[:captured] = capture(&blk)
    end

    render 'ted_bootstrap/header', options
  end

  def tb_stub(label, options={})
    content_tag :span, nil, options.merge({
      class: %W(stub #{options[:class]}).join(' ')
    }) do
      label = content_tag :span, label, class: 'stub-label'

      remove = content_tag :a, nil, class: 'stub-remove', href: '#' do
        icon 'times-circle', nil, class: 'stub-icon'
      end

      label + remove
    end
  end

end
