<script lang="ts">
import container from "@/container/config";
import { Container } from "inversify";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Base extends Vue {
  public container: Container = container;

}
</script>