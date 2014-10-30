# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
echo provisioning
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs git
cd /vagrant && sudo npm install -g grunt-cli && grunt
SCRIPT

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = false
  config.vm.provision "shell", inline: $script
end
