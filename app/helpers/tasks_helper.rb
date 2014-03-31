module TasksHelper

  def li_for_task(task)
    content_tag :li, :data => {:id => task.id, :class => task.class.to_s.downcase}, :class => task.status_text do
      yield
    end
  end

end
